import * as request from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage }) => {
   try {
      const res = await request.get('users/suggested', {
         params: {
            page: page,
            per_page: perPage,
         },
      });
      return res.data;
   } catch (error) {}
};
