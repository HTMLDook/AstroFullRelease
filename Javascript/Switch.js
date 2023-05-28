document.getElementById('fake-btn').setAttribute('aria-selected', 'true');

function showFake() {
    document.getElementById('fake-img').classList.add('Selected');
    document.getElementById('fake-img').classList.remove('NotSelected');
    document.getElementById('real-img').classList.add('NotSelected');
    document.getElementById('real-img').classList.remove('Selected');
    document.getElementById('fake-btn').setAttribute('aria-selected', 'true');
    document.getElementById('real-btn').setAttribute('aria-selected', 'false');
}
  
function showReal() {
  document.getElementById('real-img').classList.add('Selected');
  document.getElementById('real-img').classList.remove('NotSelected');
  document.getElementById('fake-img').classList.add('NotSelected');
  document.getElementById('fake-img').classList.remove('Selected');
  document.getElementById('real-btn').setAttribute('aria-selected', 'true');
  document.getElementById('fake-btn').setAttribute('aria-selected', 'false');
}

function selectFake() {
  showFake();
}

function selectReal() {
  showReal();
}