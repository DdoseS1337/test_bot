import { CreateUserDTO } from "./dto/user.dto";
import { UserDocument } from "./interface/user.interface";
import { UserRepository } from "./user.repository";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  private async create(createUserDTO: CreateUserDTO) {
    try {
      const createUser = {
        wallet_address: createUserDTO.address,
        client_id: createUserDTO.id,
      } as Omit<UserDocument, "_id">;
      return this.userRepository.create(createUser);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  async validateCreateUserDto(createUserDTO: CreateUserDTO) {
    try {
      const lastEntry = new Date(Date.now());
      await this.userRepository.findOneAndUpdate(
        { client_id: createUserDTO.id },
        { $set: { updated_at: lastEntry } }
      );
    } catch (err) {
      return this.create(createUserDTO);
    }
  }
}
