import { useState } from 'react';

import { Button } from './components/ui/button';
import { cn } from './lib/utils';
import AuthForm from './service/AuthForm';
import RegForm from './service/RegForm';

interface AppProps {
  className?: string;
}

const App = ({ className }: AppProps) => {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <div className={cn(className, 'w-[600px] m-auto p-[100px]')}>
      {login ? <AuthForm /> : <RegForm />}
      <Button onClick={() => setLogin(!login)} variant={'link'}>
        {login ? 'Еще нет аккаунта' : 'Уже есть аккаунт'}
      </Button>
    </div>
  );
};

export default App;
