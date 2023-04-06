import { CssBaseline } from '@mui/material'
import { Children, useEffect, useState } from 'react'
import { ContactList } from '../../components/ContactList'
import { Input } from '../../components/Input'
import { PerfilUsuario } from '../../components/PerfilUsuario'
import { Title } from '../../components/Title'
import { getContacts } from '../../services/api'
import { Contact } from '../../types'



export function Agenda() {
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState<Contact[]>([])

    useEffect(() => {
        async function listContacts() {
            setContacts(await getContacts())
        }
        listContacts()
        console.log(contacts)
    }, [])


    return (
        <CssBaseline>
            <Title text={'Agenda de Contatos'} />
            <Input placeholder="Localizar" type='text' />
            <ContactList>
                {
                    contacts.map(contact => {
                        return <PerfilUsuario contactData={contact} />
                    })
                }
            </ContactList>
        </CssBaseline>

    )
}


