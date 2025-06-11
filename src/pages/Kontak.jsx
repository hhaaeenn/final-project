import React from 'react'

const Kontak = () => {
  return (
    
    <div >
      <h2 className='justify-self-center text-center font-bold'>Kontak Kami</h2>
       <p className='justify-self-center p-6 rounded-3xl shadow-md  text-center font-bold'>Apabila ada kritik dan saran tentang website ini bisa klik tombol dibawah ya</p>
      <div className='p-2 rounded shadow-md justify-center flex'>
      <a href="https://api.whatsapp.com/send?phone=6285223857074&text=saran "><img class="_afvz" alt="WhatsApp Main Page" src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg" className='p-6 rounded-3xl shadow-md' /></a>
      <a href="https://www.tiktok.com/@adalah.parhan?_t=ZS-8x7YYW7HCpU&_r=1 "><img alt="tiktok Main Page" src="https://icons8.com/icon/84521/tiktok.svg" className='p-6 rounded-3xl shadow-md' /></a>
      </div>
    </div>
  )
}

export default Kontak