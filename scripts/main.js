window.addEventListener('load', ()=>{
  //sidebar
const iconSidebar = document.querySelector('.icon-sidebar');
  $('#sidebar').click(()=>{
    $('.ui.sidebar')
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle')
  })
  //modals
  $('#modal1').click(()=>{
    $('.ui.modal.modal1').modal('show')
  })
  $('#modal2').click(()=>{
    $('.ui.modal.modal2').modal('show')
  })
  //shape
  $('.shape').shape();
  
})

