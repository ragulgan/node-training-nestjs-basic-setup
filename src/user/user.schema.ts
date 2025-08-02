import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ toJSON: { versionKey: false }, toObject: { versionKey: false }, timestamps: true })
export class User {

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString(); 
    delete ret._id; 
    return ret;
  },
});