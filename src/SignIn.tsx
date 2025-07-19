import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconFile, IconLive, IconSetting } from '@douyinfe/semi-icons';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Modal, Form, Col, Row, Space, Image, ImagePreview, Banner, Card, Typography } from '@douyinfe/semi-ui';

function SignIn() {
    const { Header, Footer, Sider, Content } = Layout;
    const { Text } = Typography;
    const { Meta } = Card;
    
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
    const { Input } = Form;
    const style = { width: '100%' };

    const navigate = useNavigate();

    const [valueUsername, setValueUsername] = useState("");
    const handleChangeUsername = (value) => {
        setValueUsername(value);
    }
    const [valuePassword, setValuePassword] = useState("");
    const handleChangePassword = (value) => {
        setValuePassword(value);
    }

    const [valueMessage, setValueMessage] = useState("");

    const handleSignIn = () => {

        if(valueUsername === "feldy" && valuePassword === "1")
        {
            setValueMessage("");
            localStorage.removeItem("veribirthname_islogin");
            localStorage.setItem("veribirthname_islogin", "TRUE");
            navigate("/home");
        }else{
            setValueMessage("Username or Password wrong!");
        }
    }

    return (
        <Layout style={{ width:'100%', margin:"0px"}}>
            {/* content start */}
            <Row>
                <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                    <Form
                        initValues={initValues}
                        style={{ padding: 15, width: '100%' }}
                        onValueChange={(v)=>console.log(v)}
                    >
                            <Card
                                title={
                                    <Meta title='VeriBirthName | Administrator Sign In'
                                        avatar={<img src="http://localhost:5173/VeriBirthNameLogo.png" alt="verilogo" height="48px"/>}
                                    />
                                }
                            >
                                <Input
                                    field="username"
                                    label="Username"
                                    initValue={valueUsername}
                                    onChange={handleChangeUsername}
                                    style={style}
                                    trigger='blur'
                                />
                                <Input
                                    field="password"
                                    label="Password"
                                    mode="password"
                                    initValue={valuePassword}
                                    onChange={handleChangePassword}
                                    style={style}
                                    trigger='blur'
                                />
                                <div style={{color:"var(--semi-color-danger)"}}>{valueMessage}</div>
                                <Button type='primary' theme='solid' onClick={handleSignIn}>Sign In</Button>
                            </Card>
                    </Form>
                </Col>
            </Row>
            {/* content end */}

        </Layout>

    );
};

export default SignIn;