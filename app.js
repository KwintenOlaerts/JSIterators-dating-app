const data = [
    {
      name: 'Kwinten Bosmans',
      age: 32,
      gender: 'male',
      lookingfor: 'female',
      location: 'Berchem',
      image: 'https://randomuser.me/api/portraits/men/82.jpg'
      },
      {
        name: 'Aisha Benhaddou',
        age: 24,
        gender: 'female',
        lookingfor: 'male',
        location: 'Knokke',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
        },
        {
            name: 'Lander Willems',
            age: 31,
            gender: 'male',
            lookingfor: 'female',
            location: 'Gentbrugge',
            image: 'https://randomuser.me/api/portraits/men/80.jpg'
            },
];

const profiles = profileIterator(data);

// Next Event
document.getElementById('next').addEventListener('click', nextProfile)

// Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item"> Name: ${currentProfile.name}
    </li>
    <li class="list-group-item"> Age: ${currentProfile.age}
    </li>

    <li class="list-group-item"> Location: ${currentProfile.location}</li>

    <li class="list-group-item"> Preference: ${currentProfile.lookingfor}</li>

    </ul> `;

    document.getElementById('imageDisplay').innerHTML= `<img src="${currentProfile.image}">`;
} else {
    // No more profiles
    window.location.reload();

}
} 

// Profile Iteration

function profileIterator (profiles){
    let nextIndex = 0;

    return {
        next:function() {
            return nextIndex < profiles.length ? { value: profiles [nextIndex++], done: false} : { done: true}
        }
    };
}
