import React, { useState } from 'react';
import { Modal, Form, Col, Row, Button, Space } from '@douyinfe/semi-ui';
import { IconUpload } from '@douyinfe/semi-icons';

function App() {
  const initValues = {
        name: 'semi',
        business: ['ulikeCam'],
        role: 'ued',
        switch: true,
        files: [
            {
                uid: '1',
                name: 'vigo.png',
                status: 'success',
                size: '130KB',
                preview: true,
                url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/vigo.png'
            },
            {
                uid: '2',
                name: 'resso.jpeg',
                status: 'validateFail',
                size: '222KB',
                percent: 50,
                preview: true,
                fileInstance: new File([new ArrayBuffer(2048)], 'resso.jpeg', { type: 'image/jpeg' }),
                url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/Resso.png'
            },
            {
                uid: '3',
                name: 'douyin.jpeg',
                status: 'uploading',
                size: '222KB',
                percent: 50,
                preview: true,
                fileInstance: new File([new ArrayBuffer(2048)], 'dy.jpeg', { type: 'image/jpeg' }),
                url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/dy.png'
            }
        ]
    };
    const { Section, Input, InputNumber, AutoComplete, Select, TreeSelect, Cascader, DatePicker, TimePicker, TextArea, CheckboxGroup, Checkbox, RadioGroup, Radio, Slider, Rating, Switch, TagInput } = Form;
    const plainOptions = ['A', 'B', 'C'];
    const style = { width: '90%' };
    const treeData = [
        {
            label: '亚洲',
            value: 'Asia',
            key: '0',
            children: [
                {
                    label: '中国',
                    value: 'China',
                    key: '0-0',
                    children: [
                        {
                            label: '北京',
                            value: 'Beijing',
                            key: '0-0-0',
                        },
                        {
                            label: '上海',
                            value: 'Shanghai',
                            key: '0-0-1',
                        },
                    ],
                },
            ],
        },
        {
            label: '北美洲',
            value: 'North America',
            key: '1',
        }
    ];

    const [visible, setVisible] = useState(false);
    const showDialog = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setVisible(false);
        console.log('Ok button clicked');
    };
    const handleCancel = () => {
        setVisible(false);
        console.log('Cancel button clicked');
    };
    const handleAfterClose = () => {
        console.log('After Close callback executed');
    };

    return (
        <Form
            initValues={initValues}
            style={{ padding: 10, width: '100%' }}
            onValueChange={(v)=>console.log(v)}
        >
            <Section text={'Verification Birth Name'}>
                <Row>
                    <Col span={12}>
                        <Input
                            field="name"
                            label="Full Name"
                            initValue={'Srikandi Ayu'}
                            style={style}
                            trigger='blur'
                        />
                    </Col>
                    {/* <Col span={12}>
                        <DatePicker field="date" label='日期（DatePicker）' style={style} initValue={new Date()} placeholder='请选择生效日期' />
                    </Col> */}
                </Row>
                
            </Section>
            <Space>
                <Button type='primary' theme='solid' onClick={showDialog}>Submit</Button>
                <Modal
                    title="Modal"
                    visible={visible}
                    onOk={handleOk}
                    afterClose={handleAfterClose} //>=1.16.0
                    onCancel={handleCancel}
                    closeOnEsc={true}
                >
                    This name has already been used by 47 other citizens.
                    <br />
                    Please choose an alternative.
                </Modal>
            </Space>
        </Form>
    );
}

export default App;