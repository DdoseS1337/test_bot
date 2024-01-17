import { CreateUserDTO } from "./dto/user.dto";
import { UserDocument } from "./interface/user.interface";
import { UserRepository } from "./user.repository";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  private async create(createUserDTO: CreateUserDTO) {
    const createUser = createUserDTO as Omit<UserDocument, "_id">;
    return this.userRepository.create(createUser);
  }

  async validateCreateUserDto(createUserDto: CreateUserDTO) {
    try {
      await this.userRepository.findOneAndUpdate(
        { client_id: createUserDto.client_id },
        { $set: { updated_at: createUserDto.updated_at } }
      );
    } catch (err) {
      return this.create(createUserDto);
    }
  }
}
