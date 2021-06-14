import React from 'react';
import { useForm } from 'react-hook-form';

import ModalLayout from '../../../../common/ui-kit/ModalLayout';
import Input from '../../../../common/ui-kit/Input';
import Button from '../../../../common/ui-kit/Button';

interface IProps {
  isVisible: boolean;
  onHide: () => void;
}

interface IFormFields {
  title: string;
}

const AddBoardForm: React.FC<IProps> = ({ isVisible, onHide }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>();

  const onSubmit = async (data: IFormFields): Promise<void> => {
    console.log(data);
  };

  return (
    <ModalLayout onClose={onHide} isVisible={isVisible}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Input
          type="text"
          label="Название доски"
          errorText={errors.title?.message}
          {...register('title', {
            required: 'Введите название',
            minLength: {
              value: 2,
              message: 'Слишком маленькое название',
            },
            maxLength: {
              value: 80,
              message: 'Слишком большое название',
            },
          })}
        />
        <Button type="submit" text="Создать" theme="secondary" icon="plus" iconSide="right" />
      </form>
    </ModalLayout>
  )
};

export default AddBoardForm;
