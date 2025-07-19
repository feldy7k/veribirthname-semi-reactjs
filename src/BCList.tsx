// author feldy kambey
// plan for thesis master degree
import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSemiLogo, IconHome, IconMore, IconTickCircle, IconComment, IconClear, IconFile, IconArrowRight, IconEdit } from '@douyinfe/semi-icons';
import { Layout, Nav, Button, Breadcrumb, Avatar, Form, Col, Row, Image, ImagePreview, Banner, Popconfirm, Table, Tag } from '@douyinfe/semi-ui';

function BCList() {
    const { Header, Footer, Sider, Content } = Layout;

    useEffect(() => {
        const isLogin = localStorage.getItem("veribirthname_islogin") || "";
        if(isLogin==="TRUE"){

        }else{
            navigate("/signIn");
        }
    }, []);
    
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
    const { Input, Select, DatePicker } = Form;
    const style = { width: '90%' };

    const [visibleResultName, setVisibleResultName] = useState(false);

    const handleSubmitName = () => {
        setVisibleResultName(true);

        // set var name
        localStorage.removeItem("veribirthname_babyname");
        localStorage.removeItem("veribirthname_fathername");
        localStorage.removeItem("veribirthname_mothername");

        localStorage.setItem("veribirthname_babyname", valueFullName.toUpperCase());
        localStorage.setItem("veribirthname_fathername", valueFatherName.toUpperCase());
        localStorage.setItem("veribirthname_mothername", valueMotherName.toUpperCase());

        localStorage.removeItem("veribirthname_officername");
        localStorage.removeItem("veribirthname_officernip");
        
        localStorage.setItem("veribirthname_officername", valueOfficerName.toUpperCase());
        localStorage.setItem("veribirthname_officernip", valueOfficerNIP.toUpperCase());
    };

    // set input baby full name
    const [valueFullName, setValueFullName] = useState('Srikandi Ayu');

    const handleChangeFullName = (value) => {
        setValueFullName(value);
        
        if(visibleResultName === true){
            setVisibleResultName(false);
        }
    };

    const handleReset = () => {
        setVisibleResultName(false);
    }

    // additional field
    const [valueFatherName, setValueFatherName] = useState('Ardy Prasetya');
    const handleChangeFatherName = (value) => {
        setValueFatherName(value);
    };
    const [valueMotherName, setValueMotherName] = useState('Sri Suharti');
    const handleChangeMotherName = (value) => {
        setValueMotherName(value);
    };
    const [valueOfficerName, setValueOfficerName] = useState('Feldy Judah Kambey');
    const handleChangeOfficerName = (value) => {
        setValueOfficerName(value);
    };
    const [valueOfficerNIP, setValueOfficerNIP] = useState('987XXXXXXXXXXXXXXXXX');
    const handleChangeOfficerNIP = (value) => {
        setValueOfficerNIP(value);
    };

    const navigate = useNavigate();

    const handlePreviewBirthCert = () =>
    {
        window.open("http://localhost:5173/BirthCertificate.html", "_blank");
    }

    //popconfirm
    const onConfirm = () => {
        localStorage.removeItem("veribirthname_islogin");
        navigate("/signIn");
    };
    const onCancel = () => {
        
    };

    // CREATE, UPDATE
    const [valuePageState, setValuePageState] = useState('CREATE');


    const columns = [
        {
            title: 'No',
            dataIndex: 'key'
        },
        {
            title: 'NIK',
            dataIndex: 'nik'
        },
        {
            title: 'Full Name',
            dataIndex: 'fullname'
        },
        {
            title: 'Gender',
            dataIndex: 'gender'
        },
        {
            title: 'POB',
            dataIndex: 'placeofbirth'
        },
        {
            title: 'DOB',
            dataIndex: 'dateofbirth'
        },
        {
            title: 'Child No',
            dataIndex: 'childno'
        },
        {
            title: 'Father Name',
            dataIndex: 'fathername'
        },
        {
            title: 'Mother Name',
            dataIndex: 'mothername'
        },
        {
            title: 'Create Date',
            dataIndex: 'createTime',
        },
        {
            title: '',
            dataIndex: 'operate',
            render: () => {
                return <Button type='primary' className='btnPrintCertificate' theme='solid' onClick={handlePreviewBirthCert} >Print Certificate</Button>;
            },
        }
    ];
    const data = [
        {
            key: '1',
            createTime: '2020-02-18 05:31',
            nik:'3571XXXXXXXXXXXXXXXXX',
            fullname: 'SRIKANDI AYU',
            placeofbirth: 'JAKARTA PUSAT',
            dateofbirth: '2019-12-09',
            gender: 'FEMALE',
            childno: '1',
            fathername: 'Ardy Prasetya',
            mothername: 'Sri Suharti'
        },
        {
            key: '2',
            createTime: '2020-01-17 05:31',
            nik:'3374XXXXXXXXXXXXXXXXX',
            fullname: 'SRI KANDI AYU',
            placeofbirth: 'JAKARTA SELATAN',
            dateofbirth: '2020-02-12',
            gender: 'FEMALE',
            childno: '1',
            fathername: 'Budi Santoso',
            mothername: 'Sumanti'
        },
        {
            key: '3',
            createTime: '2020-01-17 05:31',
            nik:'3374XXXXXXXXXXXXXXXXX',
            fullname: 'SRIKANDY AYU',
            placeofbirth: 'DEPOK',
            dateofbirth: '2020-02-12',
            gender: 'FEMALE',
            childno: '1',
            fathername: 'Wahyu Saputro',
            mothername: 'Yeni'
        }
    ];
    
    return (
        <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
            <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <div>
                    <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
                        <Nav.Header>
                            {/* <IconSemiLogo style={{ height: '36px', fontSize: 36 }} /> */}
                            <img src="http://localhost:5173/VeriBirthNameLogo.png" alt="verilogo" height="36px"/>
                        </Nav.Header>
                        <span
                            style={{
                                color: 'var(--semi-color-text-2)',
                            }}
                        >
                            <span
                                style={{
                                    marginRight: '24px',
                                    color: 'var(--semi-color-text-0)',
                                    fontWeight: '600',
                                }}
                            >
                                VeriBirthName | Dashboard
                            </span>
                            
                        </span>
                        <Nav.Footer>
                            <Popconfirm
                                title="Confirmation"
                                content="Do you want to Sign Out?"
                                onConfirm={onConfirm}
                                onCancel={onCancel}
                                okText='Yes'
                                cancelText='No'
                            >
                                <span style={{marginRight:'10px', fontSize:'14px',cursor:'pointer'}}>
                                    Feldy Judah Kambey | Administrator
                                </span>
                                <Avatar color="blue" size="small">
                                    FK
                                </Avatar>
                            </Popconfirm>
                        </Nav.Footer>
                    </Nav>
                </div>
            </Header>
            <Layout>
                <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                    <Nav
                        style={{ maxWidth: 220, height: '100%' }}
                        defaultSelectedKeys={['BCList']}
                        items={[
                            { itemKey: 'Home', text: 'Home', icon: <IconHome size="large" />, onClick: () => navigate('/home')},
                            { itemKey: 'ProhibitedNames', text: 'Prohibited Names', icon: <IconClear size="large" />, onClick: () => navigate('/prohibitedNames') },
                            { itemKey: 'BCRegistration', text: 'BC Registration', icon: <IconEdit size="large" />, onClick: () => navigate('/bcRegistration') },
                            { itemKey: 'BCList', text: 'BC List', icon: <IconFile size="large" />, onClick: () => navigate('/bcList') },
                        ]}
                        footer={{
                            collapseButton: false,
                        }}
                    />
                </Sider>
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                    }}
                >
                    <Breadcrumb
                        style={{
                            marginBottom: '24px',
                        }}
                        routes={['VeriBirthName', 'BC List']}
                    />
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            minHeight: '70vh',
                            padding: '32px',
                        }}
                    >
                        
                        {/* content start */}
                        <div><b>Birth Certificate List</b></div><br/>
                        <Table columns={columns} dataSource={data} pagination={false} />
                        {/* content end */}

                    </div>
                </Content>
            </Layout>
            <Footer
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    color: 'var(--semi-color-text-2)',
                    backgroundColor: 'rgba(var(--semi-grey-0), 1)',
                }}
            >
                <span
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <span>Copyright © 2025 University </span>
                </span>
                <span>
                    <span style={{ marginRight: '24px' }}>Public Management Thesis</span>
                    <span>VeriBirthName</span>
                </span>
            </Footer>
        </Layout>
    );
};

export default BCList;