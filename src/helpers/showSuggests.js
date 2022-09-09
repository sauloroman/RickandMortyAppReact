const showSuggests = (target) => {
      if ( target.value ) {
            document.querySelector('.search').classList.add('open');
      } else {
            document.querySelector('.search').classList.remove('open');
      }
}

export default showSuggests