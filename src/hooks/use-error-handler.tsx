import { errors } from '@/constants/errors';
import { ApiError } from '@/types/api';
import { useCallback, useState } from 'react';

interface HandledError {
  code?: string;
  message: string;
}


// TODO: Agregar snackbar o algún método de notificación
export const useErrorHandler = () => {
  //   const { showSnackbar } = useSnackbar();
  const [error, setError] = useState<HandledError | null>(null);

  const handleError = useCallback((apiError: ApiError) => {
    const genericMessage = 'Ha ocurrido un error inesperado';
    const { data } = apiError;

    if (data) {
      const translatedError = errors[data.code];

      // si no está mapeado el código de error, se utiliza fallback genérico
      const finalMessage = translatedError || genericMessage;

      // showSnackbar(
      //   'Error',
      //   finalMessage || 'Ocurrió un error desconocido',
      //   'error',
      //   'full'
      // );

      const finalError = {
        code: data.code,
        message: finalMessage
      };

      setError(finalError);
      return finalError;
    } else {
      const message = apiError.message || genericMessage;
      // showSnackbar('Error', message || 'Ocurrió un error desconocido', 'error', 'full');
      setError({ message });
      return { message };
    }
  }, []);

  return { error, handleError };
};
