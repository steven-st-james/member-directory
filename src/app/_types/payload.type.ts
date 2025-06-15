export type PayloadType = {
    cell: string;
    dob: Dob,
    email: string;
    gender: string;
    id: IDType,
    location: Location;
    login: Login;
    name: Name;
    nat: string;
    phone: string;
    picture: Picture;
    registerd: Registered;

}

type Dob = {
    date: string;
    age: number;
}

type IDType = {
    name: string;
    value: string
}

type Location = {
    city: string;
    coordinates: Cooridnates;
    country: string;
    postcode: number;
    state: string;
    street: Street;
    timezone: Timezone;
  
}

type Cooridnates = {
    latitude: string;
    longitued: string;
}

type Street = {
    number: number;
    name: string;
}

type Timezone = {
    offset: string;
    description: string
}

type Login = {
    md5: string;
    password: string;
    salt: string;
    shal: string;
    sha256: string;
    username: string;
    uuid: string;
}

type Name = {
    first: string;
    last: string;
    title: string;
}

type Picture = {
    large: string;
    medium: string;
    thumbnail: string;
}

type Registered = {
    age: number;
    date: string;
}