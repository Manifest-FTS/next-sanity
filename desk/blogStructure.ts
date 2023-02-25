import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {BookIcon, UsersIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
   S.listItem()
   .title('Blog')
   .icon(BookIcon)
   .child(
      S.list()
         // Sets a title for our new list
         .title('Blog')
         // Add items to the array
         // Each will pull one of our new singletons
         .items([
            S.listItem()
              .title('Posts')
              .icon(BookIcon)
              .schemaType('blogPost')
              .child(S.documentTypeList('blogPost')
            ),
            S.listItem()
              .title('Categories')
              .schemaType('blogCategory')
              .child(S.documentTypeList('blogCategory')
            ),
            S.listItem()
              .title('Authors')
              .icon(UsersIcon)
              .schemaType('blogAuthor')
              .child(S.documentTypeList('blogAuthor')
            ),
         ])
   )
)
