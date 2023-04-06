

//import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { Link } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import { MenuItem } from '../../components/MenuItem'
import { AddressBook, ImageSquare } from 'phosphor-react'
import Button from '@mui/material/Button';
import { BaseLayout } from '../../layout/BaseLayout'
import { CssBaseline } from '@mui/material';

export function Home() {


    return (

        <CssBaseline>
            <BaseLayout appBarTitle="HOME">
                <div className="action-buttons">
                    <Link to={`/Login`}>
                        <Button variant="contained" color="secondary" size="large">Login</Button>
                    </Link>
                    <Link to={`/Register`}>
                        <Button variant="contained" color="secondary" size="large">Registre-se</Button>
                    </Link>
                    <Link to={`/Gallery`}>
                        <Button variant="contained" color="secondary" size="large">Galeria</Button>
                    </Link>

                    <Menu>
                        <Link to={`/Agenda`}>
                            <MenuItem icon={<AddressBook size={24} />} text="Agenda" />
                        </Link>
                        <Link to={`/Gallery`}>
                            <MenuItem icon={<ImageSquare size={24} />} text="Galeria" />
                        </Link>
                    </Menu>
                </div>
            </BaseLayout>
        </CssBaseline>
       
    )

}