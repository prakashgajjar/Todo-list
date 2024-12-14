const text01 = document.getElementById('text01')
const text02 = document.getElementById('text02')
const text03 = document.getElementById('text03')
const text04 = document.getElementById('text04')
const text05 = document.getElementById('text05')

const header01 = document.getElementById('header01')
const header02 = document.getElementById('header02')

const date01 = document.getElementById('date01')
const date02 = document.getElementById('date02')
const date03 = document.getElementById('date03')
const date04 = document.getElementById('date04')
const date05 = document.getElementById('date05')
const child2 = document.getElementById('child2')
const maininput = document.getElementById('maininput')

const list03 = document.getElementById('list03');
const list0310 = document.getElementById('list0310'); 
const inputmain = document.getElementById('inputtext');
const list04 = document.getElementById('list04')
const list041 = document.getElementById('list041')
const list05 = document.getElementById('list05')
const list051 = document.getElementById('list051')
const list061 = document.getElementById('list061')
const list071 = document.getElementById('list071')
const list07 = document.getElementById('list07')

const image01 = document.getElementById('image01')
const image02 = document.getElementById('image02')
const image03 = document.getElementById('image03')
const image04 = document.getElementById('image04')
const image05 = document.getElementById('image05')
const image06 = document.getElementById('image06')
const image07 = document.getElementById('image07')
const image08 = document.getElementById('image08')
const image09 = document.getElementById('image09')
const image10 = document.getElementById('image10')
const image11 = document.getElementById('image11')
const image12 = document.getElementById('image12')
const image13 = document.getElementById('image13')
const image14 = document.getElementById('image14')
const image15 = document.getElementById('image15')
const image16 = document.getElementById('image16')
const image17 = document.getElementById('image17')
const image18 = document.getElementById('image18')
const image19 = document.getElementById('image19')
let counter =0;
const date = document.getElementById('date')
const hr = document.getElementById('hr')

const today = new Date();

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);
header02.innerText = formattedDate;

image01.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg01.jpg')"
  date.style.color = 'black'
})
image02.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg02.jpg')"
  date.style.color = 'black'

})
image03.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg03.jpg')"
  date.style.color = 'white'
})
image04.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg04.jpg')"
  date.style.color = 'white'
})
image05.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg05.jpg')"
  date.style.color = 'white'
})
image06.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg06.jpg')"
  date.style.color = 'white'
})
image07.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg07.jpg')"
  date.style.color = 'white'
})
image08.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg08.jpg')"
  date.style.color = 'white'
})
image09.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg09.jpg')"
  date.style.color = 'white'
})
image10.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg20.jpg')"
  date.style.color = 'black'
})
image11.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg11.jpg')"
  date.style.color = 'white'
})
image12.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg12.jpg')"
  date.style.color = 'white'
})
image13.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg13.jpg')"
  date.style.color = 'white'
})
image14.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg14.jpg')"
  date.style.color = 'white'
})
image15.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg15.jpg')"
  date.style.color = 'black'
})
image16.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg16.jpg')"
  date.style.color = 'white'
})
image17.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg17.jpg')"
  date.style.color = 'white'
})
image18.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg18.jpg')"
  date.style.color = 'white'
})
image19.addEventListener('click', function () {
  child2.style.backgroundImage = "url('BG/bg19.jpg')"
  date.style.color = 'white'
})

const parent = document.getElementById('parent01')
const child1 = document.getElementById('child1')
const toggle = document.getElementById('toggle')
const body = document.querySelector('body')
const h11 = document.getElementById('header')
const name = document.getElementById('name')
let count = 0;
toggle.addEventListener('click', () => {

  const isDarkMode = body.classList.toggle('dark-mode');

  if (isDarkMode) {
    body.style.backgroundColor = '#202224';
    child1.style.backgroundColor = '#202224';
    child1.style.color = 'white';
    h11.style.color = 'white';
    name.style.color = 'white';
    hr.style.color = 'black';
    toggle.classList.replace('fa-sun', 'fa-moon');
  } else {
    body.style.backgroundColor = 'white';
    child1.style.backgroundColor = 'white';
    child1.style.color = 'black';
    h11.style.color = 'black';
    name.style.color = 'black';
    hr.style.color = 'white';
    toggle.classList.replace('fa-moon', 'fa-sun');
  }
});

const displayButton = document.getElementById('display');
const imageSection = document.getElementById('child221');

imageSection.classList.add('hidden');

displayButton.addEventListener('click', () => {
  imageSection.classList.toggle('hidden');
  imageSection.classList.toggle('visible');
});



inputmain.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const inputvalue = inputmain.value;

    if (inputvalue.trim() !== '') {
      const newdiv = document.createElement('div');
      const newi = document.createElement('i')
      const newicon = document.createElement('i')
      newdiv.className = 'bg-opacity-10 backdrop-blur-sm flex  item-center pl-[50px] newdiv01 transition hover:bg-blue-500 hover:bg-opacity-20'
      newi.className = 'far fa-circle absolute z-20 left-4 top-2 text-2xl';
      newicon.className = 'fa-regular fa-star absolute z-40 right-6 top-1 text-2xl'
      newdiv.style.width = '1100px';
      newdiv.style.height = '48px';
      newdiv.style.minHeight = '48px';
      newdiv.style.borderRadius = '6px';
      newdiv.style.display = 'flex';
      newdiv.style.alignItems = 'center';
      newicon.style.cursor = 'pointer';
      
      newdiv.textContent = inputvalue;
      newdiv.appendChild(newi)
      newdiv.appendChild(newicon)

      if(list0310.className == 'block'){
        list03.appendChild(newdiv);
      }
      else if(list051.className == 'block'){
        list05.appendChild(newdiv)
      }
      else if(list071.className == 'block'){
        list07.appendChild(newdiv)
      }


      inputmain.value = '';
      list03.scrollTop = list03.scrollHeight;

      newicon.addEventListener('click',()=>{  //when click the star this div be first child of parent
        newicon.classList.remove('fa-regular');
        newicon.classList.add('fa-solid');
        const tempdiv = newdiv;
        if(list0310.className == 'block'){
          list03.prepend(tempdiv);
        }
        else if(list051.className == 'block'){
          list05.prepend(tempdiv);
        }
        else if(list071.className == 'block'){
          list07.prepend(tempdiv);
        }
     
      })

  

      const delet = newdiv.querySelector('i');
      delet.addEventListener('click', () => {
        newdiv.style.textDecoration = 'line-through'
        newi.className = 'fa-solid fa-check absolute z-20 left-4 top-1 text-2xl'

        list04.appendChild(newdiv)
      })
      text05.addEventListener('click', () => {
        delet.addEventListener('click', () => {
          newdiv.remove();
        })
      })

    }
  }
});
const child145 = document.getElementById('child155');
const input001 = document.getElementById('input001');
const child14 = document.getElementById('child14');
const btn1 = document.getElementById('btn1');
child145.style.visibility = 'hidden'


btn1.addEventListener('click', () => {
  if (child145.style.visibility === 'hidden') {
    child145.style.visibility = 'visible';
  }
});

input001.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    child145.style.visibility = 'hidden';
    const inputvalue = input001.value.trim();

    if (inputvalue !== '') {
      const newdiv02 = document.createElement('div');
      const newh2 = document.createElement('h1');
      const newii = document.createElement('i');

      newh2.innerText = inputvalue;


      newii.className = 'fa-solid fa-list-ul flex justify-center items-center';
      newh2.className = 'ml-3';
      newdiv02.className = 'flex mt-2 ml-2 mr-2 hover:bg-gray-700 rounded-sm h-7';

      newdiv02.append(newii);
      newdiv02.append(newh2);

      child14.append(newdiv02);
      input001.value = '';
    }
  }
});

const newdisplay01 = document.getElementById('newinpput01')
// const middiv = document.getElementById('middiv01')
// middiv.style.backgroundImage = "url('BG/bg26.jpg')"
const assignedh10 = document.getElementById('assignedh10')
const assignedh11 = document.getElementById('assignedh11')
const assignedh12 = document.getElementById('assignedh12')

text01.addEventListener('click', () => {

  date01.className = 'block';
  date02.className = 'hidden';
  date03.className = 'hidden';
  date04.className = 'hidden';
  date05.className = 'hidden';

  list0310.className = 'block'
  list041.className = 'hidden'
  list051.className = 'hidden'
  list061.className = 'hidden'
  list071.className = 'hidden'


  child2.style.backgroundImage = "url('BG/bg05.jpg')"
  text01.classList.add('bg-gray-700')
  text03.classList.remove('bg-gray-700')
  text04.classList.remove('bg-gray-700')
  text05.classList.remove('bg-gray-700')
  text02.classList.remove('bg-gray-700')

  newinput01.className = 'block'
})

text02.addEventListener('click', () => {
  date01.className = 'hidden';
  date02.className = 'block';
  date03.className = 'hidden';
  date04.className = 'hidden';
  date05.className = 'hidden';

  list0310.className = 'hidden'
  list041.className = 'hidden'
  list051.className = 'block'
  list061.className = 'hidden'
  list071.className = 'hidden'


  child2.style.backgroundImage = "url('BG/bg19.jpg')"
  text01.classList.remove('bg-gray-700')
  text03.classList.remove('bg-gray-700')
  text04.classList.remove('bg-gray-700')
  text05.classList.remove('bg-gray-700')
  text02.classList.add('bg-gray-700')

  newinput01.className = 'block'

})

text03.addEventListener('click', () => {

  date01.className = 'hidden';
  date02.className = 'hidden';
  date03.className = 'block';
  date04.className = 'hidden';
  date05.className = 'hidden';
  child2.style.backgroundImage = "url('BG/bg17.jpg')"
  text02.classList.remove('bg-gray-700')
  text01.classList.remove('bg-gray-700')
  text03.classList.add('bg-gray-700')
  text04.classList.remove('bg-gray-700')
  text05.classList.remove('bg-gray-700')
  list0310.className = 'hidden'
  list041.className = 'hidden'
  list051.className = 'hidden'
  list061.className = 'block'
  list071.className = 'hidden'
  ++counter;
  newinput01.className = 'hidden'

  if(counter == 1){
  setTimeout(()=>{
  assignedh10.classList.replace('hidden','block')
  },500)
  setTimeout(()=>{
  assignedh10.classList.replace('block','hidden')
  assignedh11.classList.replace('hidden','block')
  },2000)
  setTimeout(()=>{
  assignedh10.classList.replace('block','hidden')
  assignedh11.classList.replace('block','hidden')
  assignedh12.classList.replace('hidden','block')

  },3500)
  setTimeout(()=>{
    assignedh12.classList.replace('block','hidden')
    counter =0;
  },5000)
}
  // setTimeout(()=>{
    
  //   assignedh10.classList.replace('hidden','block')
  //   assignedh11.classList.replace('hidden','block')
  //   assignedh12.classList.replace('hidden','block')
  //   },5000)

})
text04.addEventListener('click', () => {

  date01.className = 'hidden';
  date02.className = 'hidden';
  date03.className = 'hidden';
  date04.className = 'block';
  date05.className = 'hidden';
  child2.style.backgroundImage = "url('BG/bg12.jpg')"
  text02.classList.remove('bg-gray-700')
  text01.classList.remove('bg-gray-700')
  text03.classList.remove('bg-gray-700')
  text04.classList.add('bg-gray-700')
  text05.classList.remove('bg-gray-700')
  list0310.className = 'hidden'
  list041.className = 'hidden'
  list051.className = 'hidden'
  list061.className = 'hidden'
  list071.className = 'block'

  newinput01.className = 'block'
  
})
text05.addEventListener('click', () => {

  date01.className = 'hidden';
  date02.className = 'hidden';
  date03.className = 'hidden';
  date04.className = 'hidden';
  date05.className = 'block';
  child2.style.backgroundImage = "url('BG/bg13.jpg')"
  list0310.className = 'hidden'
  list041.className = 'block'
  list051.className = 'hidden'
  list061.className = 'hidden';
  list071.className = 'hidden'
  text02.classList.remove('bg-gray-700')
  text01.classList.remove('bg-gray-700')
  text03.classList.remove('bg-gray-700')
  text04.classList.remove('bg-gray-700')
  text05.classList.add('bg-gray-700')

  newinput01.className = 'block'

})
const child11 = document.getElementById('child11')

body.addEventListener('click',()=>child11.classList.remove('border-2'))



