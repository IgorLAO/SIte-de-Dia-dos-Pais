import './App.scss';
import { useEffect, useState } from 'react';

import yondu from '../src/pages/assets/pais/y.jpg';
import marlin from '../src/pages/assets/pais/marlin.png';
import dartVader from '../src/pages/assets/pais/Darth_Vader.jpg';
import homer from '../src/pages/assets/pais/homer2.png';
import mufasa from '../src/pages/assets/pais/Mufasa.webp';
import rick from '../src/pages/assets/pais/rick.png';
import srincrivel from '../src/pages/assets/pais/srincrivel.jpg';
import paiDoMundo from '../src/pages/assets/pais/paiDoMundo.png';

import quill from '../src/pages/assets/filhos/quill.jpg';
import carl from '../src/pages/assets/filhos/carl.jpg';
import luke_skywalker from '../src/pages/assets/filhos/luke_skywalker.jpeg';
import nemo from '../src/pages/assets/filhos/nemo.jpeg';
import simba from '../src/pages/assets/filhos/Profile_-_Simba.webp';
import zeze from '../src/pages/assets/filhos/zeze.webp';
import MelhorDev from '../src/pages/assets/filhos/melhorDev.png';
import bart from '../src/pages/assets/filhos/bart.jpg';

import Yondu_quill from '../src/pages/assets/juntos/YonduPeterVol2.webp'
import rick_Carl from '../src/pages/assets/juntos/rickCarl.webp'
import Homer_Bart from '../src/pages/assets/juntos/bartHomer.jpg'
import Marlin_Nemo from '../src/pages/assets/juntos/finding-nemo-1-copy.webp'
import mufasa_Simba from '../src/pages/assets/juntos/simbaMufasa.webp'
import SrIncrivel_Zeze from '../src/pages/assets/juntos/zezeSrIncrivel.png'
import Dartvader_Luke from '../src/pages/assets/juntos/lukeVader.webp'
import dupla from '../src/pages/assets/juntos/dupla.png'

import corretSimbolo from '../src/pages/assets/correto.png'
import erradoSimbolo from '../src/pages/assets/errado.png'


function App() {
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')
  const [correto, setCorreto] = useState('')
  const [certo, setCerto] = useState('certo1')
  const [errado, setErrado] = useState('errado1')


  useEffect(() => {
    const Validação = () => {
      if (valor1 !== '' && valor2 !== '') {
        if (valor1 === valor2) {
          setCorreto(valor1);

          setCerto('certo')

          setTimeout(() => {
            window.location.reload();
          }, 1000);

        }

        else if (valor1 != valor2) {
          setCorreto(valor1);

          setErrado('errado')

          setTimeout(() => {
            window.location.reload();
          }, 1000);

        }
      }
    };

    Validação();
  }, [valor1, valor2]);


  const imagens = {
    Marlin_Nemo: Marlin_Nemo,
    Dartvader_Luke: Dartvader_Luke,
    Homer_Bart: Homer_Bart,
    Yondu_quill: Yondu_quill,
    rick_Carl: rick_Carl,
    SrIncrivel_Zeze: SrIncrivel_Zeze,
    mufasa_Simba: mufasa_Simba,
    dupla: dupla

  }


  return (
    <div className='main'>

      <h1 style={{fontSize: '45px', color: '#6FC17C', fontFamily: "'Courier New', Courier, monospace'"}}> Quem é o pai de quem? </h1>
      <div className='pais'>
        <img src={marlin} onClick={() => setValor1('Marlin_Nemo')} />
        <img src={dartVader} onClick={() => setValor1('Dartvader_Luke')} />
        <img src={homer} onClick={() => setValor1('Homer_Bart')} />
        <img src={yondu} onClick={() => setValor1('Yondu_quill')} />
        <img src={mufasa} onClick={() => setValor1('mufasa_Simba')} />
        <img src={rick} onClick={() => setValor1('rick_Carl')} />
        <img src={srincrivel} onClick={() => setValor1('SrIncrivel_Zeze')} alt='Sr. Incrível' />
        <img src={paiDoMundo} onClick={() => setValor1('dupla')} alt='Sr. Incrível' />

      </div>

      <span className='imagemCorreto'>
        <span>
          <span className={certo}>
            <img className='imgjuntos' src={imagens[correto]} />
            <div className={certo + '2'}>
              <img src={corretSimbolo} className='CorretSimbolo' />
            </div>
          </span>

          <div className={errado}>
            <img src={erradoSimbolo} />
          </div>
        </span>
      </span>

      <div className='filhos'>
        <img src={quill} onClick={() => setValor2('Yondu_quill')} />
        <img src={simba} onClick={() => setValor2('mufasa_Simba')} />
        <img src={zeze} onClick={() => setValor2('SrIncrivel_Zeze')} />
        <img src={carl} onClick={() => setValor2('rick_Carl')} />
        <img src={MelhorDev} onClick={() => setValor2('dupla')} />
        <img src={nemo} onClick={() => setValor2('Marlin_Nemo')} />
        <img src={luke_skywalker} onClick={() => setValor2('Dartvader_Luke')} />
        <img src={bart} onClick={() => setValor2('Homer_Bart')} />
      </div>

    </div>
  );
}

export default App;
