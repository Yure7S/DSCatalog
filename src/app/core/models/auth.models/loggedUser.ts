export class loggedUser {
    constructor(id?: number, token?: any, type?: string, username?: string, email?: string, roles?: string[]) {
        this.id = id
        this.token = token
        this.type = type
        this.username = username
        this.email = email
        this.roles = roles
    }

    id?: number
    token: any
    type?: string
    username?: string
    email?: string
    roles?: string[]
}
