export interface UserDto {
  name: string;
  email: string;
  token?: string;
  salt?: string;
}
