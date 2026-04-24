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
  const rect =  modal.getBoundingClientRect();

  const clickedOustide =(
     e.clientX < rect.left ||  e.clientX > rect.left || e.clientY < rect.Top  || e.clientY > rect.bottom
    );
    if(clickedOustide){
     modal.close();
    }
})
