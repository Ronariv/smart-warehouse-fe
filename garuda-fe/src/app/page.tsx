import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard/');

  const userId = 0;

  if (!userId) {
    return redirect('/auth/sign-in');
  } else {
    redirect('/dashboard/overview');
  }
}
