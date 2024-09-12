export enum Role {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    TEAM_LEAD = 'TEAM_LEAD',
    HR = 'HR',
    PO = 'PO'
}

export type LoginReq = {
    email: string;
    password: string;
}

export type LoginRes = {
    authToken: string;
}

export type User = {
    name: string;
    role: Role
}

export type JwtPayload = {
    name: string;
    role: Role;
}
