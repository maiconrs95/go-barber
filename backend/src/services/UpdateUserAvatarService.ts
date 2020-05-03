import path from 'path';
import fs from 'fs';

import { getRepository } from 'typeorm';
import User from '../models/User';

import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

interface Request {
    user_id: string;
    avatarFileName: string;
}

class UpdateUserAvatarService {
    public async execute({ user_id, avatarFileName }: Request): Promise<User> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(user_id);

        if (!user) {
            throw new AppError('Only authenticated user can change avatar');
        }

        if (user.avatar) {
            // Deletar av

            const userAvatarFilePath = path.join(
                uploadConfig.directory,
                user.avatar,
            );
            const avatarFileExists = await fs.promises.stat(userAvatarFilePath);

            if (avatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFileName;

        await userRepository.save(user);

        delete user.avatar;

        return user;
    }
}

export default UpdateUserAvatarService;
