import "@styles/global.css";
import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata = {
  title: "Engineering Academy",
  description: "Learn with AI powered Instructors",
};
const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>

        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />

          {children}
        </main>
      </Provider>

    </body>
  </html>
);

export default RootLayout;