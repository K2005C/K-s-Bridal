function scrollToDresses(){

  document
  .getElementById('dresses')
  .scrollIntoView({
    behavior:'smooth'
  });

}

function filterDresses(category, button){

  const cards =
  document.querySelectorAll('.dress-card');

  const buttons =
  document.querySelectorAll('.filters button');

  buttons.forEach(btn=>{
    btn.classList.remove('active');
  });

  button.classList.add('active');

  cards.forEach(card=>{

    if(
      category === 'all' ||
      card.dataset.category.includes(category)
    ){
      card.style.display='block';
    }

    else{
      card.style.display='none';
    }

  });

}

function showDetails(dressName){

 const details = {
  'Sheath Dress':
  'A sheath dress is slim and elegant. Book an appointment to view more sheath options.',

  'Mermaid Dress':
  'A mermaid dress is fitted and dramatic. Book an appointment to view more mermaid options.',

  'Fit and Flare Dress':
  'A fit and flare dress is fitted at the top and softer at the bottom. Book an appointment to view more fit and flare options.',

  'A-Line Dress':
  'An A-line dress is classic, flattering and easy to wear. Book an appointment to view more A-line options.',

  'Ballgown Dress':
  'A ballgown is full, romantic and princess-like. Book an appointment to view more ballgown options.',

  'Basque Waist Dress':
  'A basque waist dress has a dropped V-shaped waistline. Book an appointment to view more basque waist options.',

  'Satin Dress':
  'A satin dress is smooth, clean and timeless. Book an appointment to view more satin options.',

  'Lace Dress':
  'A lace dress is romantic and detailed. Book an appointment to view more lace options.'
};

  document.getElementById('popupTitle')
  .textContent=dressName;

  document.getElementById('popupText')
  .textContent=details[dressName];

  document.getElementById('popup')
  .style.display='flex';

}

function closeSuccessPopup() {
    document.getElementById("successPopup").style.display = "none";
}

function submitForm(event){

  event.preventDefault();

  const name =
  document.getElementById('name').value;

 document.getElementById("successPopup").style.display = "flex";

 document.getElementById("successMessage").innerHTML =
`Thank you, ${name}! Your appointment request has been received.`;

  event.target.reset();

}

function closePopup(){
  document.getElementById('popup').style.display = 'none';
}