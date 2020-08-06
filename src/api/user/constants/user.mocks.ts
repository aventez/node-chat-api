import { User } from "../interfaces/user.interface";

export const USER_MOCKS: User[] = ([
    { username: 'admin', password: '$2b$12$OT4CUgxC7UVuV1TYEap8KuF2FwLS3ei9J/fhOS4KqDkdvaPkalm5.' },
    { username: 'test', password: '$2b$12$OT4CUgxC7UVuV1TYEap8KuF2FwLS3ei9J/fhOS4KqDkdvaPkalm5.' },
    { username: 'qwerty', password: '$2b$12$OT4CUgxC7UVuV1TYEap8KuF2FwLS3ei9J/fhOS4KqDkdvaPkalm5.' },
] as any) as User[];