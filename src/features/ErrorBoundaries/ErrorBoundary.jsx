import { Component, useEffect, useState } from 'react';
import ErrorBlock from '../../ui/ErrorBlock';
import { postMessage } from '../../services/apiMessage';
import { Button, InfoMessage, Loader } from '../../ui';
import { useLocation } from 'react-router-dom';

class ErrorBoundaryInner extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    const { message, stack } = error;
    this.props.setHasError(true);
    this.props.setErrors((errors) => [...errors, { message, stack }]);
  }

  componentDidUpdate(prevProps, prevSate) {
    if (!this.props.hasError && prevProps.hasError) {
      this.setState({ hasError: false });
    }

    const { hasError } = this.state;
    const { setIsLoading, setReportStatus, errors } = this.props;

    const handlePostMessage = async () => {
      try {
        setIsLoading(true);
        // await postMessage({errors});
        setReportStatus('success');
      } catch (e) {
        setReportStatus('error');
      } finally {
        setIsLoading(false);
      }
    };

    if (hasError && !prevProps.hasError) {
      handlePostMessage();
    }
  }

  render() {
    const { hasError } = this.state;
    const { isLoading, reportStatus, setReportStatus, hasNavigation } =
      this.props;

    if (hasError) {
      return (
        <div className='flex h-screen w-full flex-col items-center justify-center bg-slate-900'>
          <ErrorBlock
            hasControls={false}
            className=' mb-6'
            title='Щось пішло не так...'
            subTitle='Під час роботи додатку виникла неочікувана помилка. Ми вже працюємо над вирішенням проблеми.'
          />
          {isLoading && <Loader loaderText='Відправляємо звіт...' />}
          {!isLoading && reportStatus === 'success' && (
            <InfoMessage
              title='Звіт відправлено'
              type='success'
              outlined={true}
              timeout={2000}
              onTimeout={() => setReportStatus(null)}
            />
          )}
          {!isLoading && !reportStatus && hasNavigation && (
            <Button to='/'>На головну</Button>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

function ErrorBoundary({ children, hasNavigation = true }) {
  const location = useLocation();
  const [hasError, setHasError] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reportStatus, setReportStatus] = useState(null);

  useEffect(() => {
    if (hasError) {
      setHasError(false);
      setErrors([]);
      setIsLoading(false);
      setReportStatus(null);
    }
  }, [location.key]);

  return (
    <>
      <ErrorBoundaryInner
        errors={errors}
        setErrors={setErrors}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        reportStatus={reportStatus}
        setReportStatus={setReportStatus}
        hasError={hasError}
        setHasError={setHasError}
        hasNavigation={hasNavigation}
      >
        {children}
      </ErrorBoundaryInner>
    </>
  );
}

export default ErrorBoundary;
