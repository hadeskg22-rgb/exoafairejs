
const users = [
    { prenom: 'Mamadou', nom: 'Ba', statut: 0, age: 22, role: 'admin' },
    { prenom: 'Aminata', nom: 'Sarr', statut: 0, age: 25, role: 'admin' },
    { prenom: 'Ibrahima', nom: 'Ndiaye', statut: 0, age: 40, role: 'user' },
    { prenom: 'Mariama', nom: 'Fall', statut: 0, age: 30, role: 'user' },
    { prenom: 'Ousmane', nom: 'Diop', statut: 0, age: 28, role: 'user' },
];

const getadmins = (users) => {
    return users.filter(user => user.role === 'admin');
};

console.log(getadmins(users));

let user = {
    prenom: 'Mamadou',
    nom: 'Ba',
    statut: 0,
    age: 22,
    role: 'admin'
};

let pnom = user.prenom;
let nom1 = user.nom;
let role1 = user.role;

console.log(pnom, nom1, role1);



const { prenom, nom, role } = user;

console.log(prenom, nom, role);



let usermap = users.map(({ prenom, role }) => {
    return {
        p: prenom,
        r: role
    };
});

console.log(usermap);



let [user1, , user3] = users;

console.log(user1, user3);

// Spread operator
let equipe = [
    ...users,
    { prenom: 'Cheikh', nom: 'Gueye', statut: 0, age: 30, role: 'user' }
];

console.log(equipe);



users[1].statut = 1;

console.log(users);
