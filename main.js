const albumCovers = [
  'awake_orchestral_version.jpg',
  'beyond_the_heart.jpg',
  'celeste.jpg',
  'celeste_b-sides.jpg',
  'celeste_farewell.jpg',
  'celeste_piano_collections.jpg',
  'chicory_a_colorful_tale.jpg',
  'chicory_an_afternoon_in_luncheon.jpg',
  'chicory_piano_collections.jpg',
  'chicory_the_sounds_of_picnic_province.jpg',
  'escism.jpg',
  'harmony_fall_of_reverie.jpg',
  'light_rail.jpg',
  'lullaby_for_lancer.jpg',
  'minecraft_caves_and_cliffs.jpg',
  'minecraft_nether_update.jpg',
  'minecraft_the_wild_update.jpg',
  'moonglow_bay.jpg',
  'oneknowing.jpg',
  'pigstep_trance_trap.jpg',
  'reknowing.jpg',
  'trance_state.jpg'
];
  
const albumContainer = document.getElementById('album-container');
  
albumContainer.addEventListener('click', function(event) {

  albumContainer.querySelectorAll('.album').forEach(album => {
    album.classList.toggle('blur');

    if (album.classList == event.target.classList) {
      album.classList.toggle('blur');
      album.classList.toggle('clicked');
    }
  }
);

});

albumCovers.forEach(imageFileName => {
  const img = document.createElement('img');
  img.src = `albumCovers/${imageFileName}`;
  img.className = 'album';
  albumContainer.appendChild(img);
});