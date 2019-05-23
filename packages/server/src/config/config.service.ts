import * as Joi from 'joi';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'provision'])
        .default('development'),
      APP_PORT: Joi.number().default(3000),
      APP_SECRET_KEY: Joi.string().required(),
      
      DB_NAME_VAD10: Joi.string().required(),
      DB_USERNAME_VAD10: Joi.string().required(),
      DB_PASSWORD_VAD10: Joi.string().required(),
      DB_HOST_VAD10: Joi.string().required(),
      DB_PORT_VAD10: Joi.number().required(),
      UPLOAD_PATH_VAD10: Joi.string().required(),
      
      DB_NAME_VAD20: Joi.string().required(),
      DB_USERNAME_VAD20: Joi.string().required(),
      DB_PASSWORD_VAD20: Joi.string().required(),
      DB_HOST_VAD20: Joi.string().required(),
      DB_PORT_VAD20: Joi.number().required(),
      UPLOAD_PATH_VAD20: Joi.string().required(),

    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  get(key: string): string {
    return this.envConfig[key];
  }

}

export const config = new ConfigService(`./src/config/enviroments/${process.env.NODE_ENV || 'development'}.env`);