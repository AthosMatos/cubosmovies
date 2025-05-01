/* 
<Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route path="signIn" element={<SignInPage />} />
            <Route path="logIn" element={<LoginPage />} />
          </Route>
        </Routes>
*/

export const pagePaths = {
  signIn: "/signIn",
  logIn: "/logIn",
  home: "/",
  notFound: "*",
  library: "/library",
  libraryId: (id: string) => `/library/${id}`,
};
