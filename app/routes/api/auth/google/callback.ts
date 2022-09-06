import type { LoaderFunction } from '@remix-run/node';
import { authenticator } from '~/services/auth/index.server';
import { PROVIDER_NAME } from '~/services/auth/google.server';

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate(PROVIDER_NAME, request, {
    successRedirect: '/adoption',
    failureRedirect: '/'
  });
};
