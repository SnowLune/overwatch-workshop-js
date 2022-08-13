// minify.js, a utility from overwatch-workshop.js

const minChars = () => 
{
   const alphabet = "abcdefghijklmnopqrstuvwxyz";
   let c = [];

   // a - z
   for ( let i = 0; i < alphabet.length; i++ )
   {
      c.push( alphabet[i] );
   }

   // A - Z
   for ( let i = 0; i < alphabet.length; i++ )
   {
      c.push( alphabet[i].toUpperCase() );
   }

   // aa - zz
   for ( let i = 0; i < alphabet.length; i++ )
   {
      for ( let j = 0; j < alphabet.length; j++ )
      {
         let s = `${alphabet[i]}${alphabet[j]}`;
         c.push( s );
      }

   }

   return c;
}

function renameFunctions( s ) 
{
   s.split
}

// console.dir(minChars(), { "maxArrayLength": null });
