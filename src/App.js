import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import { useState } from 'react';
import { ImQrcode } from 'react-icons/im';
import { ToastContainer, toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
import Rodape from './components/Rodape';


import './App.css';

function App() {


  const [link, setLink] = useState('');
  let  [qrcodeLink, setQrcodeLink] = useState(null);

 

  function downloadQrCode(linkUrl) {
    QRCodeLink.toDataURL(linkUrl, {
      width: 600,
      margin: 3,

    }, function (err, url) {
      setQrcodeLink(url);
    })
  }


  

  function gerarQrcode(event) {
    setLink(event.target.value);
    downloadQrCode(event.target.value);
  }

  function verificaCampo() {
    if(link.length === 0) {
      toast.info('Campo nâo pode ser Vazio!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


    } else {
      toast.success('Baixando Qrcode', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }


  return(

    <>

    <div className='container'>
      <ToastContainer autoClose={3000} />

      <QRCode className='qrcodeImage' value={link}/>

        <input type="text"
          className='inputQrcode'
          placeholder='Digite seu Link...'
          value={link}
          onChange={ (event) => gerarQrcode(event) }
        />
     
      <a onClick={ ()=> {verificaCampo()} } className='buttonDownload' href={qrcodeLink} download={`qrcode.png`}>
        Baixar Qrcode

        <ImQrcode className='iconQr' width={100} />
      </a>
      
    </div>

    <Rodape />

    </>

  );
}

export default App;
