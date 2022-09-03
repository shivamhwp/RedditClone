 import Post from '../common/Post'

//later these will come from a database
// const posts = [
//   {id: 0 , title: 'build Reddit', author: 'Shivam'},
//   {id: 1 , title: 'TypeScript is bussin rn', author: 'Shivam'},
// {id: 2 , title: 'Next.js is great', author: 'Shivam'},
// ]

const style = {
  wrapper : 'space-y-2.5',
}

const Feed = ({posts}) => {
  return  (
    <div className = {style.wrapper}>
    {posts.map((post , id) => (
      <Post {...post} key={id }/>
    )
      )}
      </div>
  
    
    
    
  )
}

export default Feed
