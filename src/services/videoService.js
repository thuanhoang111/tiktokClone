import * as request from '~/utils/httpRequest';

export const searchVideo = async ({ page, type = 'for-you' }) => {
   try {
      const res = await request.get('/videos', {
         params: {
            type: type,
            page,
         },
      });
      return res.data;
   } catch (error) {}
};
