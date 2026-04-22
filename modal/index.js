const modal =document.querySelector('#userModal');
const openBtn=document.querySelector('#openModal');
const closeBtn=document.querySelector('#closeModal');

//open modal 
openBtn.addEventListener('click',()=>{
     modal.showModal();
})

//close modal
closeBtn.addEventListener('click',()=>{
     modal.close()
})

//close on clicking the modal
modal.addEventListener('click',(e)=>{
     if(
          e.clientX < dialogDimesions.Left 
          ||
          e.clientX < dialogDimesions.Right
          ||  
          e.clientX < dialogDimesions.Top
          ||
          e.clientX < dialogDimesions.Bottom
     ){
          modal.close();
     }
})
