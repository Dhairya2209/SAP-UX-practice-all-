using StudentService as service from './service';

annotate service.Students with @(UI : {

  /* List Report */
  LineItem : [
    { Value : ID },
    { Value : name },
    { Value : city },
    { Value : country }
  ],

  SelectionFields : [
    name,
    city
  ],

  /* Object Page Header */
  HeaderInfo : {
    TypeName : 'Student',
    TypeNamePlural : 'Students',
    Title : { Value : name }
  },

  /* Object Page Fields */
  Identification : [
    { Value : ID },
    { Value : name },
    { Value : city },
    { Value : country }
  ]

});