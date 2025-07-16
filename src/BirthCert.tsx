import React, {useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Button } from '@douyinfe/semi-ui';

function BirthCert() {

    const location = useLocation();
    const { fullname } = location.state || {};

    const print = () => {
        console.log('Print button clicked');
    };

    const navigate = useNavigate();

    const back = () => {
        navigate("/home");
    };

    return (
        <>
            <Button type='primary' onClick={back} style={{width:'100px',marginLeft:'12px', marginBottom:'12px'}}>Back</Button>
            <Button type='primary' theme='solid' onClick={print} style={{width:'100px',marginLeft:'12px', marginBottom:'12px'}}>Print</Button>
            {/* Ukuran A4 pada 100 DPI = 827 x 1169 pixel */}
            <Layout style={{ border: '1px solid var(--semi-color-border)', height:1169, width: 827, padding:'45px 45px', textAlign:'center', fontSize:'13px'}}>
                <div><b style={{textDecoration:'underline'}}>Nomor Induk Kependudukan</b> : 15091XXXXXXXX001</div>
                <div><i>Personal Registration Number</i> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
                <br/>
                <div>
                    <img src="http://localhost:5173/garuda_logo.png" width="120" alt="Garuda"/>
                    <div style={{fontSize:'16px'}}><b>REPUBLIK INDONESIA</b></div><br/>

                    <div><b style={{textDecoration:'underline'}}>PENCATATAN SIPIL</b></div>
                    <div><i>REGISTRY OFFICE</i></div><br/>

                    <div><b style={{textDecoration:'underline'}}>WARGA NEGARA INDONESIA</b></div>
                    <div><i>NATIONALITY INDONESIA</i></div>
                    <br/>
                    <div><b style={{textDecoration:'underline'}}>KUTIPAN AKTA KELAHIRAN</b></div>
                    <div><i>EXCERPT OF BIRTH CERTIFICATE</i></div>
                </div>
                <br/>
                <div><span style={{textDecoration:'underline'}}>Berdasarkan Akta Kelahiran Nomor</span> : <b>XXXX-XX-XXXXXXXX-0XXX</b></div>
                <div><i>By virtue of Birth Certificate Number </i> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div><br/>
                <div>bahwa di <b>JAKARTA PUSAT</b> pada tanggal <b>SEMBILAN</b> bulan <b>DESEMBER</b> tahun <b>DUA RIBU SEMBILAN BELAS</b></div>
                <div><i>at <b>CENTRAL JAKARTA</b> on date <b>THE NINTH</b> of <b>DECEMBER</b> on year <b>TWO THOUSAND AND NINETEEN</b></i></div><br/>
                <div><b>09 DESEMBER 2019</b></div><br/>
                <div><span style={{textDecoration:'underline'}}>telah lahir</span> <b>{fullname.toUpperCase()}</b></div>
                <div><i>the birth of</i> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
                <br/>
                <div style={{fontSize:'12px',color:'var(--semi-color-primary)'}}>Full Name verified Unique by VeriBirthName ✔</div>
                <br/>
                <div>anak ke, SATU PEREMPUAN DARI AYAH <b>ARDI PRASETYA</b> DAN IBU <b>AYU KARTIKASARI</b></div>
                <div><i>child no, FIRST DAUGHTER OF FATHER </i> <b>ARDI PRASETYA</b> <i>AND MOTHER</i> <b>AYU KARTIKASARI</b></div>
                <br/>
                <br/>
                <br/>
                <div className='right-bottom' style={{fontSize:'12px',textAlign:'left',marginLeft:'400px'}}>
                    <div>Kutipan ini dikeluarkan di <b>JAKARTA PUSAT</b></div>
                    <div><i>The excerpt is issued at </i><b>CENTRAL JAKARTA</b></div><br/>
                    <div>pada tanggal <b>DUA BELAS DESEMBER</b> tahun <b>DUA RIBU SEMBILAN BELAS</b></div>
                    <div><i>on date <b>THE TWELFTH</b> of <b>DESEMBER</b> on year <b>TWO THOUSAND AND NINETEEN</b></i></div>
                    <p>
                        Pejabat Pencatatan Sipil <br/>
                        KOTA JAKARTA PUSAT<br/><br/>
                        <img src="http://localhost:5173/qrcode.png" alt="QR Code" style={{width:'95px', height:'95px'}}/><br/>
                        <b>Drs. BUDI ABDUL, M.Si</b><br/>
                        NIP. 1962XXXXXXXXXXXXXX
                    </p>
                </div>
                <br/><br/><br/>
                <div>Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik<br/>
                    yang diterbitkan oleh Balai Sertifikasi Elektronik (BSrE), BSSN
                </div>
                <br/>
            </Layout>
        </>
    );
};

export default BirthCert;