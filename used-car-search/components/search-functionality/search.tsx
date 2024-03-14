'use client';
import SearchResultPage from '@/components/search-functionality/SearchResultPage';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/dropdown';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '@/lib/store';
export default function SearchComponent() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Search Choices"]));
  const [query, setQuery] = useState('');

  let selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const router = useRouter();
  const dispatch = useDispatch();
  
  async function search_used_cars(e) {
    e.preventDefault();
    const selectedKeyString = JSON.stringify(Array.from(selectedKeys))
    if (selectedKeyString === JSON.stringify(["Search Choices"])) {
      selectedValue = "manufacturer";
    }
    try {
      await fetch(`http://127.0.0.1:5000/search?query=${query}&category=${selectedValue.toLowerCase()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => dispatch(setSearchResults(data.map(doc => doc['_source']))));
        router.push("/search/results")
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <main>
      {
        <form
          className="flex items-end space-x-2 my-[250px]"
          onSubmit={search_used_cars}
        >
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">{selectedValue}</Button>
            </DropdownTrigger>
            <DropdownMenu 
            aria-label="Search Choice Actions"
            // onAction={(key) => alert(key)}
            closeOnSelect={false}
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="Manufacturer">Manufacturer</DropdownItem>
              <DropdownItem key="Model">Model</DropdownItem>
              <DropdownItem key="Condition">Condition</DropdownItem>
              <DropdownItem
                key="Odometer"
                className="text-teal-400"
                color="danger"
              >
                Odometer
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input
            className="rounded-2xl transition ease-in-out delay-100 duration-100 enabled:transition enabled:transform"
            type="text"
            placeholder="Search for Used Cars"
            value={query}
            onChange={e => setQuery(e.target.value)}
          ></Input>
          <Button
            type="submit"
            className=" rounded-xl transition ease-in-out delay-100 bg-teal-500 hover:scale-105 hover:bg-cyan-500 duration-100 enabled:transition enabled:transform"
          >
            Search
          </Button>
        </form>
      }
    </main>
  );
}
