export const hex2rgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
};

export class MyError extends Error {
  constructor(message, extraParams) {
    super(message);
    this._extraParams = extraParams;
  }

  get extraParams() {
    return this._extraParams;
  }
}

export function handleError(status) {
  const errorInfo = {};

  switch (status) {
    case 404: {
      errorInfo.title = 'Сторінку не знайдено';
      errorInfo.description = 'Можливо, вона була видалена або переміщена';
      break;
    }
    case 401:
    case 403: {
      errorInfo.title = 'Помилка авторизації';
      errorInfo.description = 'Необхідно здійснити повторни вхід до сайту';
      break;
    }
    case 500: {
      errorInfo.title = 'Внутрішня помилка сервера';
      errorInfo.description = 'Ми вже з`ясовуємо причини...';
      break;
    }
    default: {
      errorInfo.title = 'Щось пішло не так...';
      errorInfo.description = 'Ми вже з`ясовуємо причини...';
    }
  }

  throw new MyError('An error occured during fetching report', {
    status: status,
    ...errorInfo,
  });
}
