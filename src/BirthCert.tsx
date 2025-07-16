import React, {useState} from 'react';
import { Layout } from '@douyinfe/semi-ui';

function BirthCert() {
    
    return (
        // Ukuran A4 pada 100 DPI = 827 x 1169 pixel
        <Layout style={{ border: '1px solid var(--semi-color-border)', height:1169, width: 827, padding:'40px 50px', textAlign:'center'}}>
            <div><b>Nomor Induk Kependudukan : </b> 15091XXXXXXXX001</div>
            <div><i>Personal Registration Number</i></div>
            <br/>
            <div>
                <img src="http://localhost:5173/garuda_logo.png" width="130" alt="Garuda"/>
                <div ><b>REPUBLIK INDONESIA</b></div><br/><br/>
                <div>PENCATATAN SIPIL<br/><i>REGISTRY OFFICE</i></div>
                <div>WARGA NEGARA INDONESIA<br/><i>NATIONALITY INDONESIA</i></div>
                <div>KUTIPAN AKTA KELAHIRAN<br/><i>EXCERPT OF BIRTH CERTIFICATE</i></div>
            </div>

            <div>
                <p>Berdasarkan Akta Kelahiran Nomor <b>XXXX-XX-XXXXXXXX-0XXX</b><br/>
                bahwa di <b>JAKARTA PUSAT</b> pada tanggal <b>SEMBILAN</b><br/>
                bulan <b>DESEMBER</b> tahun <b>DUA RIBU SEMBILAN BELAS</b><br/>
                <i>on date THE NINTH OF DECEMBER on year TWO THOUSAND AND NINETEEN</i><br/>
                <br/>
                telah lahir <b>SRIKANDI AYU</b><br/>
                <br/>
                anak ke <b>SATU, PEREMPUAN DARI AYAH SAPUTRA DAN IBU MURLIANI</b><br/>
                <i>child no FIRST DAUGHTER FROM FATHER SAPUTRA AND MOTHER MURLIANI</i></p>
            </div>

            <div>
                <p>Kutipan ini dikeluarkan di <b>TEBO</b><br/>
                <i>The excerpt is issued</i><br/>
                pada tanggal <b>DUA BELAS OKTOBER</b><br/>
                <i>on date THE TWELFTH OF OCTOBER</i><br/>
                tahun <b>DUA RIBU DUA PULUH</b><br/>
                <i>on year TWO THOUSAND AND TWENTY</i></p>

                <p>Pejabat Pencatatan Sipil <br/>
                <b>KABUPATEN TEBO</b><br/><br/>
                {/* <img src="qrcode.png" alt="QR Code" class="qr"><br/> */}
                <b>Drs. H. ABU BAKAR, M.Si</b><br/>
                NIP. 196204151993031003
                </p>
            </div>
            <br/><br/><br/><br/><br/>
            <div>
                Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik<br/>
                yang diterbitkan oleh Balai Sertifikasi Elektronik (BSrE), BSSN
            </div>
        </Layout>
    );
};

export default BirthCert;