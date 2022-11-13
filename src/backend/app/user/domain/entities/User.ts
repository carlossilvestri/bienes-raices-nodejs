export interface User {
    user_uuid:      string
    name:           string
    email:          string
    password:       string
    token:          string | null
    isConfirmed:    boolean
    updatedAt: Date,
    createdAt: Date
}
export interface CreateUserRequest extends Omit<User, 'user_uuid' | 'updatedAt' | 'createdAt'>{}