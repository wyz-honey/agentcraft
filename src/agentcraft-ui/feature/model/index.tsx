import React, { useEffect } from "react";
import { Breadcrumbs, Anchor, Button, Box, Table, Modal, TextInput, Text, Highlight, LoadingOverlay, Select, NumberInput, PasswordInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { getModelList, useGlobalStore, deleteModel, addModel, updateModel } from '@/store/model';
import { Model } from '@/types/model';
import { formatDateTime } from '@/util/index';
import { DEFAULT_MODEL_REQUEST_TIMEOUT } from '@/constant/index';
import FeatureDescription from '@/components/FeatureDescription';
// import styles from './index.module.scss';

function List() {
    const modelList: Model[] = useGlobalStore().modelList;
    const loading: boolean = useGlobalStore().loading;
    const setLoading = useGlobalStore().setLoading;
    const setOpen = useGlobalStore().setOpen;
    const setEditStatus = useGlobalStore().setEditStatus;
    const updateCurrentModel = useGlobalStore().updateCurrentModel;
    const removeModel = (model: Model) => {
        const { id, name } = model;
        const deleteContent = `确定删除 ${name}?`;
        modals.openConfirmModal({
            title: '删除LLM代理',
            centered: true,
            children: (
                <Text size="sm">
                    <Highlight highlight={name}>{deleteContent}</Highlight>
                </Text>
            ),
            labels: { confirm: '确定', cancel: '取消' },
            onCancel: () => console.log('Cancel'),
            confirmProps: { color: 'red' },
            onConfirm: async () => {
                try {
                    setLoading(true);
                    await deleteModel(id);
                    await getModelList();
                } catch (e) {
                    console.log(e);
                } finally {
                    setLoading(false);
                }

            },
        });

    }
    const getModels = async () => {
        setLoading(true);
        await getModelList();
        setLoading(false);
    }
    const rows = modelList.map((element: Model) => (
        <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.name_alias}</td>
            <td>{element.description}</td>
            <td style={{ width: 300 }}>{element.url}</td>
            <td style={{ width: 300 }}>{element.token}</td>
            <td>{formatDateTime(element.created)}</td>
            <td>{formatDateTime(element.modified)}</td>
            <td style={{ width: 180 }}> <Button variant="filled" size="xs" onClick={() => { setEditStatus(true); updateCurrentModel(element); setOpen(true); }} mr={4}>修改</Button><Button variant="filled" color="red" size="xs" onClick={() => removeModel(element)}>删除</Button></td>
        </tr>
    ));
    useEffect(() => {
        getModels();
    }, []);

    return (
        <Box pos="relative" >
            <LoadingOverlay visible={loading} overlayOpacity={0.3} />
            <Table striped withBorder withColumnBorders mt={12}  >
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>名称</th>
                        <th>别名</th>
                        <th>描述</th>
                        <th>LLM服务访问地址</th>
                        <th>访问token</th>
                        <th>创建时间</th>
                        <th>修改时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </Box>
    );
}

function AddOrUpdate() {
    const open = useGlobalStore().open;
    const isEdit = useGlobalStore().isEdit;
    const setEditStatus = useGlobalStore().setEditStatus;
    const setOpen = useGlobalStore().setOpen;
    const setLoading = useGlobalStore().setLoading;
    const currentModel: Model | undefined = useGlobalStore().currentModel;
    const initialValues = {
        name: '',
        name_alias: '',
        url: '',
        token: '',
        timeout: DEFAULT_MODEL_REQUEST_TIMEOUT,
        description: ''
    }
    const form = useForm({
        initialValues,
        validate: {
            name: (value) => (!value ? '名称必填' : null),
            name_alias: (value) => (!value ? '模型别名必填' : null),
            url: (value) => (/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(value) ? null : '请输入合法的访问地址'),
        },
    });
    useEffect(() => {
        if (isEdit) {
            form.setValues({
                name: currentModel?.name || '',
                name_alias: currentModel?.name_alias || '',
                url: currentModel?.url || '',
                token: currentModel?.token || '',
                timeout: currentModel?.timeout || DEFAULT_MODEL_REQUEST_TIMEOUT,
                description: currentModel?.description || ''
            })
        }
    }, [currentModel]);

    return (
        <Modal opened={open} onClose={() => { setOpen(false) }} title={isEdit ? "修改LLM代理" : "创建LLM代理"} centered>
            <Box maw={640} mx="auto">
                <TextInput withAsterisk label="名称" placeholder="" {...form.getInputProps('name')} />
                <TextInput withAsterisk label="别名" placeholder="" {...form.getInputProps('name_alias')} />
                <TextInput withAsterisk label="LLM服务访问地址" placeholder="" {...form.getInputProps('url')} />
                <PasswordInput label="LLM服务访问token" placeholder="" {...form.getInputProps('token')} />
                <NumberInput label="访问超时时间(s)" placeholder="" {...form.getInputProps('timeout')} />
                <Textarea label="描述" placeholder="输入数据集描述" {...form.getInputProps('description')} />
            </Box>
            <Box maw={640} mx="auto" pt={12} style={{ textAlign: 'right' }}>
                <Button onClick={async () => {
                    form.validate();
                    if (form.isValid()) {
                        try {
                            setLoading(true);
                            !isEdit ? await addModel(form.values) : await updateModel(currentModel?.id, form.values);
                            await getModelList();
                            setOpen(false);
                            form.reset();
                        } catch (e) {
                            console.log(e);
                        } finally {
                            setEditStatus(false);
                            setLoading(false);
                        }

                    }

                }}>确认</Button>
            </Box>
        </Modal>
    );
}



export function ModelPage() {

    const items = [
        { title: 'AgentCraft', href: '#' },
        { title: 'LLM代理', href: '/model' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));
    const setOpen = useGlobalStore().setOpen;
    const setEditStatus = useGlobalStore().setEditStatus;
    return (
        <>
            <Breadcrumbs>{items}</Breadcrumbs>
            <FeatureDescription title="LLM代理" description="AgentCraft的LLM代理是基于基础大语言模型服务比如通义千问等构建出的一个代理层服务，主要是为了抹平不同模型服务之间的接口数据差异，方便在业务中快速切换更加适合的模型服务"/>
            <Box mt={12} >
                <Button onClick={() => { setEditStatus(false); setOpen(true) }}>
                    新建LLM代理
                </Button>
            </Box>
            <AddOrUpdate />
            <List />
        </>

    );
}
