import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const NavSearch = () => {
    const [searchItem, setSearchItem]= useState('')
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading]= useState(false)


    const navigate = useNavigate()

    useEffect(()=> {
        const fetchSuggestions = async () => {
            if (searchItem.length === 0) {
                setSuggestions([])
                return;
            }
            setLoading(true);
            try {
                const responce = await fetch(`https://dummyjson.com/products/search?q=${searchItem}`)
                const data = await responce.json()
                setSuggestions(data.products)
            } catch (error) {
                console.error("Error fetching suggestions:", error)
                setSuggestions([])
            }
        }
        fetchSuggestions()

        const debounceFetch = setTimeout(fetchSuggestions, 200);
        return () => clearTimeout(debounceFetch)
    }, [searchItem])
    const handleCategoryProduct = (category)=> {
        setSearchItem("")
        setSuggestions([])
        navigate(`/category/${category}`)
    }

  return (
    <div>
      <div className="agileits_search position-relative">
              <form onSubmit={(e)=> e.preventDefault()}>
                <input
                  name="Search"
                  type="search"
                  
                  onChange={(e)=> setSearchItem(e.target.value)}
                  placeholder= "Search for products, brands, and more"
                  required=""
                />
                <button
                  type="submit"
                  className="btn btn-default"
                  aria-label="Left Align"
                >
                  <span className="fa fa-search" aria-hidden="true">
                  </span>
                </button>
                {
                    loading && (
                    <div className="spinner-border text-primary position-absolute" style={{ top: 10, right: 10 }}>
                     <span className="visually-hidden">Loading Search....</span>
                    </div>
                    )
                }
                {
                    suggestions && suggestions.length > 0 && (
                        <div className="search-data">
                            <table className="table table-hover" style={{ zIndex: 1000 }}>
                                {
                                    suggestions.map((product)=> {
                                        return (
                                        <tr key={product.id}  onClick={()=> handleCategoryProduct(product.category)}>
                                            <td className="list-group-item list-group-item-action">
                                              {product.title} - {product.category}
                                            </td>
                                        </tr>
                                        )
                                    })
                                }                       
                            </table>
                        </div>
                    ) 
                }
              </form>
            </div>
    </div>
  )
}

export default NavSearch;