// handlers offline and online condition
window.addEventListener('offline', ()=>{
  CONTENT_FRAME.src = "./pages/connections.html"
})
window.addEventListener('online', ()=>{
  console.log('online');
})



// get nav links
const CHARTS = document.getElementById('lnk1')
const ENROUTE = document.getElementById('lnk2')
const AC = document.getElementById('lnk3')
const WX = document.getElementById('lnk4')
const PROCS = document.getElementById('lnk5')
const FLTS = document.getElementById('lnk6') // FLIGHTS
const COMMS = document.getElementById('lnk7') // FREQ FOR CONNECT ATC
// get __modal_window_chart_select div
const MODAL_CHART_SEL = document.querySelector('.__modal_window_chart_select')
// get modal wripper
const MODALWINDOW_WRAP = document.querySelector('.modal_window_wrapper')
// get menu`s
const NAVUPPERMENU = document.querySelector('.upper_menu')
const CHARTMENU = document.querySelector('#chart_menu')
const RETURN_ARROW = document.querySelector('.return_arrow')

// get chart menu
const LDZA_MENU = document.querySelector('.ldza_choose_chart_menu')

// get links
const SidsLink = document.querySelector('.sidlink').addEventListener('click', Myfunc)
// get content frame
const CONTENT_FRAME = document.getElementById('content_frame')
// console.log(CONTENT_FRAME);
//get button for choosing need chart
const SEL_CHART_BTN = document.querySelector('.sel')
// get form and chart search input
const FORM_CHART_SEARCH = document.querySelector('.form_chart_search').addEventListener("submit", (event)=>
{
  event.preventDefault();
  if (localStorage.getItem('chart'))
  {
    if (localStorage.getItem('chart') == "LDZA")
    {
      NAVUPPERMENU.classList.add('upper_menu_hide')
      CHARTMENU.classList.remove('chart_menu_active')
      LDZA_MENU.classList.add('ldza_choose_chart_menu_active')

    }
  }
})

// set actions


CHARTS.addEventListener('click', OpenChartMenu)
RETURN_ARROW.addEventListener('click', ReturnBack)
SEL_CHART_BTN.addEventListener('click', Selected_chart)


// actions handlers
function OpenChartMenu()
{
  NAVUPPERMENU.classList.add('upper_menu_hide')
  CHARTMENU.classList.add('chart_menu_active')
}


function ReturnBack()
{
  NAVUPPERMENU.classList.remove('upper_menu_hide')
  CHARTMENU.classList.remove('chart_menu_active')
}

function Selected_chart()
{
  SEL_CHART_BTN.classList.add('sel_btn_hide')
  MODALWINDOW_WRAP.classList.add('__modal_window_active')
  MODAL_CHART_SEL.classList.add('__modal_window_active')
}


function Myfunc()
{
  console.log("func Myfunc");
  CONTENT_FRAME.src = "https://drive.google.com/file/d/1DcYtUEdv6stlS2ZgwPp5p3nR3vUXPMgy/preview";
  MODALWINDOW_WRAP.classList.remove('__modal_window_active');
  if (CONTENT_FRAME.src = "https://drive.google.com/file/d/1DcYtUEdv6stlS2ZgwPp5p3nR3vUXPMgy/preview")
  {
    
    SEL_CHART_BTN.innerHTML = "SID"
    SEL_CHART_BTN.setAttribute('href', 'https://drive.google.com/file/d/1DcYtUEdv6stlS2ZgwPp5p3nR3vUXPMgy/preview')
    SEL_CHART_BTN.setAttribute('target', 'frame_content')
    SEL_CHART_BTN.classList.remove('sel_btn_hide')
    SEL_CHART_BTN.classList.add('__CAT_LINKS')
  }
}