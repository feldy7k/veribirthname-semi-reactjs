import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconFile, IconLive, IconSetting } from '@douyinfe/semi-icons';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Modal, Form, Col, Row, Space, Image, ImagePreview, Banner } from '@douyinfe/semi-ui';

function SignIn() {
    const { Header, Footer, Sider, Content } = Layout;
    
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
            }
        ]
    };
    const { Section, Input, InputNumber, AutoComplete, Select, TreeSelect, Cascader, DatePicker, TimePicker, TextArea, CheckboxGroup, Checkbox, RadioGroup, Radio, Slider, Rating, Switch, TagInput } = Form;
    const style = { width: '90%' };

    const [visibleResult, setVisibleResult] = useState(false);
    const showResult = () => {
        setVisibleResult(true);
    };
    const resetResult = () => {
        setVisibleResult(false);
    };

    const [valueFullName, setValueFullName] = useState('Srikandi Ayu');
    const handleChangeFullName = (value, event) => {
        setValueFullName(value);
        
        if(visibleResult === true){
            setVisibleResult(false);
        }
    };

    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/home");
    }
    
    return (
       
            <Layout style={{ border: '1px solid var(--semi-color-border)', width:412, margin:"12px 0px 0px 6px"}}>
                {/* content start */}
                <Form
                    initValues={initValues}
                    style={{ padding: 10, width: '100%' }}
                    onValueChange={(v)=>console.log(v)}
                >
                    <Row>
                        <Input
                            field="username"
                            label="Username"
                            initValue={""}
                            // value={valueFullName}
                            // onChange={handleChangeFullName}
                            style={style}
                            trigger='blur'
                        />
                        <Input
                            field="password"
                            label="Password"
                            initValue={""}
                            style={style}
                            trigger='blur'
                        />
                        <Button type='primary' theme='solid' onClick={handleSignIn}>Sign In</Button>
                        
                    </Row>
                </Form>
                {/* content end */}

            </Layout>

    );
};

export default SignIn;