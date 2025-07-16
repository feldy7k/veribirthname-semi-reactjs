import React, {useState} from 'react';
import { Layout, Button } from '@douyinfe/semi-ui';

function BirthCert() {
    
    const print = () => {
        console.log('Print button clicked');
    };

    return (
        <>
            <Button type='primary' theme='solid' onClick={print} style={{width:'100px',marginLeft:'12px', marginBottom:'12px'}}>Print</Button>
            {/* Ukuran A4 pada 100 DPI = 827 x 1169 pixel */}
            <Layout style={{ border: '1px solid var(--semi-color-border)', height:1169, width: 827, padding:'30px 60px', textAlign:'center', fontSize:'14px'}}>
                
                <div><b style={{textDecoration:'underline'}}>Nomor Induk Kependudukan : </b> 15091XXXXXXXX001</div>
                <div><i>Personal Registration Number</i></div>
                <br/>
                <div>
                    <img src="http://localhost:5173/garuda_logo.png" width="130" alt="Garuda"/>
                    <div><b>REPUBLIK INDONESIA</b></div><br/>

                    <div><b style={{textDecoration:'underline'}}>PENCATATAN SIPIL</b></div>
                    <div><i>REGISTRY OFFICE</i></div><br/>

                    <div><b style={{textDecoration:'underline'}}>WARGA NEGARA INDONESIA</b></div>
                    <div><i>NATIONALITY INDONESIA</i></div>
                    <br/>
                    <div><b style={{textDecoration:'underline'}}>KUTIPAN AKTA KELAHIRAN</b></div>
                    <div><i>EXCERPT OF BIRTH CERTIFICATE</i></div>
                </div>
                <br/>
                <div>Berdasarkan Akta Kelahiran Nomor <b>XXXX-XX-XXXXXXXX-0XXX</b></div>
                <div><i>By virtue of Birth Certificate Number </i><b>XXXX-XX-XXXXXXXX-0XXX</b></div><br/>
                <div>bahwa di <b>JAKARTA PUSAT</b> pada tanggal <b>SEMBILAN</b> bulan <b>DESEMBER</b> tahun <b>DUA RIBU SEMBILAN BELAS</b></div>
                <div><i>at <b>Central Jakarta</b> on date THE NINTH OF DECEMBER on year TWO THOUSAND AND NINETEEN</i></div><br/>
                <div> 09 DESEMBER 2019</div><br/>
                <div>telah lahir <b>SRIKANDI AYU</b></div>
                <div><i>was born</i> <b>SRIKANDI AYU</b></div>
                <br/>
                <div>anak ke SATU, PEREMPUAN DARI AYAH <b>ARDI PRASETYA</b> DAN IBU <b>AYU KARTIKASARI</b></div>
                <div><i>child no FIRST, DAUGHTER FROM FATHER </i> <b>ARDI PRASETYA</b> <i>AND MOTHER</i> <b>AYU KARTIKASARI</b></div>
                <br/><br/>
                <div className='right-bottom' style={{fontSize:'13px',textAlign:'left',marginLeft:'410px'}}>
                    <div>Kutipan ini dikeluarkan di <b>JAKARTA PUSAT</b></div>
                    <div><i>The excerpt is issued at </i>CENTRAL JAKARTA</div><br/>
                    <div>pada tanggal <b>DUA BELAS OKTOBER</b> tahun <b>DUA RIBU DUA PULUH</b></div>
                    <div><i>on date THE TWELFTH OF OCTOBER on year TWO THOUSAND AND TWENTY</i></div>
                    <p>
                        Pejabat Pencatatan Sipil <br/>
                        <b>KOTA JAKARTA PUSAT</b><br/><br/>
                        <img src="http://localhost:5173/qrcode.png" alt="QR Code" style={{width:'105px', height:'105px'}}/><br/>
                        <b>Drs. H. ABU BAKAR, M.Si</b><br/>
                        NIP. 196204151993031003
                    </p>
                </div>
                <br/><br/>
                <div>Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik<br/>
                    yang diterbitkan oleh Balai Sertifikasi Elektronik (BSrE), BSSN
                </div>
            </Layout>
        </>
    );
};

export default BirthCert;