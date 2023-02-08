const names = [
    'Abdulla', 'Ahlam', 'Ahmed Hisham',
    'Ahmed Al-Slaibi', 'Ali Lababidi', 'Ali Hadi',
    'Ali Naser', 'Aref', 'Bader',
    'Eman', 'Esraa', 'Fatima',
    'Hajar', 'Hasan Alsowaidi', 'Hasan Marhoon',
    'Hassan	Al Hashimi', 'Hassan Khushbakhat', 'Haya',
    'Jehan', 'Madhawi', 'Mahmood',
    'Maryam', 'Mohamed Alalwan', 'Mohammed Abdulrahim',
    'Nadia', 'Noor', 'Noroz',
    'Salman', 'Sayed', 'Yusuf', 'Zahid'
]


const randomBtn = document.querySelector('.randomBtn') 
const student = document.querySelector('.student') 
//Randomizing the names
for (let i = 0; i < names.length; i++) {
    const randomPosition = Math.floor((names.length - i) * Math.random())
    const randomItem = names.splice(randomPosition, 1)
    
    names.push(...randomItem)
}

function getRandomName (){
    if(names.length !== 0){
        // student.innerText = names.pop() 
        student.innerText = names.pop() 
        console.log(names)
        }
    }

randomBtn.addEventListener('click', getRandomName)


